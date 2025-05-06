# Tracing

An example observability stack using opentelemetry for instrumentation, grafana
for visualization, and loki/tempo for logs and traces.

## Usage

1. Run the stack

   ```sh
   docker-compose up --build
   ```

2. Navigate to the sample app at `localhost:3000`.

3. Open Grafana at `localhost:3001`.

4. View the sample traces and logs within Grafana.
