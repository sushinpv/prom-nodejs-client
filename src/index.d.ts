export type * as promClient from "prom-client";
import type { Express } from "express";

export type Options = {
  metricsPath: string;
  app: string;
  collectDefaultMetrics: boolean;
  collectGCMetrics: boolean;
  // buckets for response time from 0.05s to 2.5s
  // these are arbitrary values since i dont know any better ¯\_(ツ)_/¯
  requestDurationBuckets: number[];
  requestLengthBuckets: number[];
  responseLengthBuckets: number[];
  extraMasks: string[];
  customLabels: string[];
  transformLabels: boolean;
  normalizeStatus: boolean;
};

/**
 * Function which is used to log error to metrics server
 * @param controller
 * @param error
 */
export declare function metricsLogError(controller: string, error: Error) {};

/**
 * Function which is used to parse the error message and return the error string
 * @param error
 */
export declare function parseError(error: Error) {};


/**
 * Returns a request middleware to expose all the metrics route
 */
export default (options: Options): Express => {};
