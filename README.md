# `tuya-exporter`

Exports the power state of [Tuya](https://en.tuya.com/) smart home devices to JSON. Uses [codetheweb/tuyapi](https://github.com/codetheweb/tuyapi).

## Getting started

Generate a `device.json` file with these [setup instructions](https://github.com/codetheweb/tuyapi/blob/master/docs/SETUP.md).

## Telegraf setup

```toml
[[inputs.exec]]
  name_override = "smartplugs"
  commands = ["node /path/to/tuya-exporter/index.js"]
  timeout = "5s"
  data_format = "json"
  tag_keys = ["name", "id"]
```
