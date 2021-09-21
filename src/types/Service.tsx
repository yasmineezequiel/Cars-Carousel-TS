
//  ServiceInit and ServiceLoading define the state of the web service before any action and while loading respectively.
interface ServiceInit {
  status: 'init';
}
interface ServiceLoading {
  status: 'loading';
}

// ServiceLoaded has the property payload to store the data loaded from the web service (note that I'm using a generic here, so I can use that interface with any data type for the payload)
interface ServiceLoaded<T> {
  status: 'loaded';
  payload: T;
}

// ServiceError has the property error to store any error that may occur. With this union type, if we set the string 'loading' in the status property and try to assign something to payload or error properties, Typescript will fail, because we didn't define an interface that allows a status of type 'loading' alongside a property named payload or error. Without Typescript or any other type checking, your code will only fail at runtime if you make that mistake.
interface ServiceError {
  status: 'error';
  error: Error;
}
export type Service<T> =
  | ServiceInit
  | ServiceLoading
  | ServiceLoaded<T>
  | ServiceError;
