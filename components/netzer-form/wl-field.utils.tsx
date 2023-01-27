import { isEmpty } from 'lodash';
import * as yup from 'yup';

export enum TValidationNames {
  STRING = 'string',
  NUMBER = 'number',
  DATE = 'date',
  BOOLEAN = 'boolean',
  EMAIL = 'email',
  MATCHES = 'matches',
  MIN = 'min',
  MAX = 'max',
  LENGTH = 'length',
  REQUIRED = 'required',
  LUHNCHK = 'luhnchk',
  VALIDATE_YEAR = 'validateYear',
  VALIDATE_MONTH = 'validateMonth',
  ZIP = 'zip',
  PHONE = 'phone',
  WHEN = 'when',
  CHECKBOX = 'checkbox',
  EMOJI = 'emoji',
  MAXTIP = 'maxTip'
}

export interface TValidation {
  name: TValidationNames;
  message?: string;
  pattern?: string;
  value?: number | string;
  fields?: [];
  then?: TValidation;
  otherwise?: TValidation;
}

export interface TFormConfig {
  [x: string]: any;
}

export interface TFormField {
  name: string;
  testID?: string;
  source?: string;
  require?: boolean;
  readonly?: boolean;
  placeholder?: string;
  pattern?: string;
  secureTextEntry?: boolean;
  autoComplete?: string;
  autocorrect?: boolean;
  keyboardType?: string;
  customMessage?: string;
  icon?: string;
  iconFocus?: string;
  accessibilityLabel?: string;
  iconAccessibilityLabel?: string;
  iconAccessibilityLabelFocus?: string;
  maxLength?: number;
  validations?: TValidation[];
  autoCapitalize?: string;
}

export const getRules = (previousValidationRule, currentValidationRule) => {
  //Documentation: https://www.npmjs.com/package/yup#api
  switch (currentValidationRule.name) {
    // Works with string only
    case TValidationNames.EMAIL:
      return previousValidationRule.email(currentValidationRule.message);

    // Works with string, number and date
    case TValidationNames.MIN:
      return previousValidationRule.min(
        currentValidationRule.value,
        currentValidationRule.message, { value: currentValidationRule.value })

    // Works with string, number and date
    case TValidationNames.MAX:
      return previousValidationRule.max(
        currentValidationRule.value,
        currentValidationRule.message, { value: currentValidationRule.value }
      );

    // Works with string only
    case TValidationNames.LENGTH:
      return previousValidationRule.length(currentValidationRule.message)

    // Works with string and number
    case TValidationNames.REQUIRED:
      return previousValidationRule.required(currentValidationRule.message)

    // Works with string and number
    case TValidationNames.MATCHES:
      return previousValidationRule.matches(currentValidationRule.pattern, {
        excludeEmptyString: true,
        message: currentValidationRule.message
      });

    case TValidationNames.CHECKBOX:
      return previousValidationRule.test(currentValidationRule.name, currentValidationRule.message, (value) => {
        return value === 'true';
      });

    case TValidationNames.WHEN:
      return previousValidationRule.when(currentValidationRule.fields, {
        is: (...fields) => {
          for (let i = 0; i < fields.length; i++) {
            if (isEmpty(fields)) {
              return false;
            }
          }
          return true;
        },
        then: getRules(yup.string(), currentValidationRule.then),
        otherwise: getRules(yup.string(), currentValidationRule.otherwise)
      });

    default:
      return previousValidationRule;
  }
};

export const validationBuilder = (field, defaultValidation = TValidationNames.STRING) => {
  if (!field?.validations) {
    return yup.mixed();
  }

  let defaultRule;

  switch (defaultValidation) {
    case TValidationNames.STRING:
      defaultRule = yup.string();
      break;
    case TValidationNames.NUMBER:
      defaultRule = yup.number();
      break;
    case TValidationNames.DATE:
      defaultRule = yup.date();
      break;
    case TValidationNames.BOOLEAN:
      defaultRule = yup.boolean();
      break;
    default:
      defaultRule = yup.mixed();
      break;
  }

  const fieldsRules = field?.validations?.reduce((previousValidationRule, currentValidationRule: TValidation) => {
    return getRules(previousValidationRule, currentValidationRule);
  }, defaultRule);

  return fieldsRules;
};

export const shapeYupFormFields = (formFields) => {
  const schema: any = Object.values(formFields).reduce((_p: any, field: any) => {
    if (field.type === 'menuTitle') return _p;
    if (!field.configuration || !field.configuration?.name) return _p;
    if (!field.configuration?.validations) return _p;
    const name = field.configuration.name;
    return {
      ..._p,
      [name]: validationBuilder(field.configuration)
    };
  }, {});

  return yup.object().shape(schema);
};