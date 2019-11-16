# `tuya-exporter`

Exports the power state of [Tuya](https://en.tuya.com/) smart home devices to JSON. Uses [codetheweb/tuyapi](https://github.com/codetheweb/tuyapi).

## Getting started

Generate a `device.json` file with these [setup instructions](https://github.com/codetheweb/tuyapi/blob/master/docs/SETUP.md).

## Format

- `name` string: Name of the device.
- `id` string: Identifier of the device.
- `power_state` int: 0 for off, 1 for on.
- `error` string: Error message when connecting to the device.

## Sample output

The JSON output will be on a single line, but is expanded below for clarity.

```json
[
  { "name": "Shelf lights", "id": "fakeID0fbce43f02cca", "power_state": 1 },
  { "name": "Lamp", "id": "fakeID06ccb611bc238", "power_state": 1 },
  {
    "name": "Smart Socket 2",
    "id": "fakeID03e485b66b27d",
    "error": "find() timed out. Is the device powered on and the ID or IP correct?"
  },
  { "name": "Fan", "id": "fakeID0527fa13c0fba", "power_state": 0 }
]
```

## Telegraf setup

```toml
[[inputs.exec]]
  name_override = "smartplugs"
  commands = ["node /path/to/tuya-exporter/index.js"]
  timeout = "5s"
  data_format = "json"
  tag_keys = ["name", "id"]
```
