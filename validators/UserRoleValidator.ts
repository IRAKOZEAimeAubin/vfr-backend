import {
  registerDecorator,
  ValidationOptions,
  ValidationArguments,
} from 'class-validator';

export function IsUserRole(validationOptions?: ValidationOptions) {
  return function (object: NonNullable<unknown>, propertyName: string) {
    registerDecorator({
      name: 'isUserRole',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          const allowedValues = ['ADMIN', 'APPROVAL OFFICER', 'USER'];
          return allowedValues.includes(value);
        },
        defaultMessage(args: ValidationArguments) {
          return `${args.property} must be one of the following values: ADMIN, APPROVAL OFFICER, USER`;
        },
      },
    });
  };
}
