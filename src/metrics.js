import Prometheus from "prom-client";

/**
 * @param prefix - metrics name prefix
 * request counter
 */
function requestCountGenerator(labelNames, prefix = "") {
  return new Prometheus.Counter({
    name: `${prefix}http_requests_total`,
    help: "Counter for total requests received",
    labelNames,
  });
}

/**
 * @param {!Array} buckets - array of numbers, representing the buckets for
 * @param prefix - metrics name prefix
 * request duration
 */
function requestDurationGenerator(labelNames, buckets, prefix = "") {
  return new Prometheus.Histogram({
    name: `${prefix}http_request_duration_seconds`,
    help: "Duration of HTTP requests in seconds",
    labelNames,
    buckets,
  });
}

/**
 * @param {!Array} buckets - array of numbers, representing the buckets for
 * @param prefix - metrics name prefix
 * request length
 */
function requestLengthGenerator(labelNames, buckets, prefix = "") {
  return new Prometheus.Histogram({
    name: `${prefix}http_request_length_bytes`,
    help: "Content-Length of HTTP request",
    labelNames,
    buckets,
  });
}

/**
 * @param {!Array} buckets - array of numbers, representing the buckets for
 * @param prefix - metrics name prefix
 * response length
 */
function responseLengthGenerator(labelNames, buckets, prefix = "") {
  return new Prometheus.Histogram({
    name: `${prefix}http_response_length_bytes`,
    help: "Content-Length of HTTP response",
    labelNames,
    buckets,
  });
}

/**
 * Histogram which is used to capture the application errors
 */
const restErrorResponseHistogram = new client.Histogram({
  name: "nodejs_error_responses",
  help: "NodeJs Application Errors",
  buckets: [10],
  labelNames: ["controller", "error"],
});

export { requestCountGenerator, requestDurationGenerator, requestLengthGenerator, responseLengthGenerator, restErrorResponseHistogram };
