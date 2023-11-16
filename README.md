# Prometheus Node.js Push Library

## Overview

This Node.js library facilitates the seamless transmission of Prometheus data to a Prometheus server using `prom-client`. The primary function, `metricsLogError`, allows the pushing of error logs to Prometheus, aiding in error monitoring and analysis.

### Functionality

#### metricsLogError

- `metricsLogError(controller, error)`
  - `controller` (string): Specifies the controller or component where the error occurred.
  - `error` (Error): Represents the error object to be logged.

## Getting Started

### Installation

```bash
npm install prom-nodejs-client
```

### Initialization

To integrate the library with an Express application:

```javascript
import express from "express";
import promMid from "prom-nodejs-client";

/**
 * Express middleware for handling metrics requests.
 * @module metricsRoute
 */

const metricsRoute = express();

/**
 * Middleware for collecting and exposing Prometheus metrics.
 * @function
 * @param {Object} options - Options for configuring the Prometheus middleware.
 * @param {string} options.metricsPath - The path for exposing the metrics endpoint.
 * @param {boolean} options.collectDefaultMetrics - Whether to collect default metrics.
 * @param {number[]} options.requestDurationBuckets - Buckets for request duration histogram.
 * @param {number[]} options.requestLengthBuckets - Buckets for request length histogram.
 * @param {number[]} options.responseLengthBuckets - Buckets for response length histogram.
 */
metricsRoute.use(
  promMid({
    metricsPath: "/metrics",
    collectDefaultMetrics: true,
    requestDurationBuckets: [0.02, 0.05, 0.1, 0.5, 1, 10],
    requestLengthBuckets: [512, 1024, 5120, 10240, 51200, 102400],
    responseLengthBuckets: [512, 1024, 5120, 10240, 51200, 102400],
  })
);

export default metricsRoute;
```

### Add the route to your app

```javascript
/**
 * Metrics route for Prometheus
 */
app.use(metricsRoute);
```

### Environment Configuration

Ensure the `.env` file contains the following configuration:

```dotenv
SERVICE_NAME=service-name
```

### Example: Logging Error Metrics

```javascript
import { metricsLogError } from "prom-nodejs-client";

const controllerName = "ExampleController";
const error = new Error("Example error message");

metricsLogError(controllerName, error);
```

## Contribution

Contributions are welcome! Feel free to open issues or pull requests.