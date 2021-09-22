//  ServiceInit and ServiceLoading define the state of the web service before any action and while loading respectively.
interface ServiceInit {
  status: 'init';
}
interface ServiceLoading {
  status: 'loading';
}
// ServiceError has the property error to store any error that may occur. With this union type, if we set the string 'loading' in the status property and try to assign something to error properties, Typescript will fail, because I didn't define an interface that allows a status of type 'loading' alongside a property named error. Without Typescript or any other type checking, code will only fail at runtime.
interface ServiceError {
  status: 'error';
  error: Error;
}

export type Service<T> =
  | ServiceInit
  | ServiceLoading
  | ServiceError;
