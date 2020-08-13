/**
 * Bind `el` event `type` to `fn`.
 */
declare function bindEvent(el: Element, type: string, fn: (...params: any[]) => any): (...params: any[]) => any;

/**
 * Unbind `el` event `type`'s callback `fn`.
 */
declare function unbindEvent(el: Element, type: string, fn: (...params: any[]) => any): (...params: any[]) => any;

/**
 * Handle link delegation on `el` or the document,
 * and invoke `fn(e)` when clickable.
 */
declare function intercept(el: Element, fn: (...params: any[]) => any): void;

/**
 * Delegate event `type` to links
 * and invoke `fn(e)`. A callback function
 * is returned which may be passed to `.unbind()`.
 */
declare function delegate(el: Element, selector: string, type: string, fn: (...params: any[]) => any, capture: boolean): (...params: any[]) => any;

/**
 * Unbind event `type`'s callback `fn`.
 */
declare function undelegate(el: Element, type: string, fn: (...params: any[]) => any, capture: boolean): void;

/**
 * Check if `e` is clickable.
 */
declare function clickable(): void;

/**
 * Event button.
 */
declare function which(): void;

/**
 * Returns an array of the names of all parameters in the given pattern.
 */
declare function extractParamNames(): void;

/**
 * Extracts the portions of the given URL path that match the given pattern
 * and returns an object of param name => value pairs. Returns null if the
 * pattern does not match the given path.
 */
declare function extractParams(): void;

/**
 * Returns a version of the given route path with params interpolated. Throws
 * if there is a dynamic segment of the route path for which there is no param.
 */
declare function injectParams(): void;

/**
 * Returns an object that is the result of parsing any query string contained
 * in the given path, null if the path contains no query string.
 */
declare function extractQuery(): void;

/**
 * Returns a version of the given path with the parameters in the given
 * query merged into the query string.
 */
declare function withQuery(): void;

/**
 * Returns a version of the given path without the query string.
 */
declare function withoutQuery(): void;

/**
 * Helper to intercept links when using pushState but server is not configured for it
 * Link clicks are handled via the router avoiding browser page reload
 */
declare function interceptLinks(): void;

