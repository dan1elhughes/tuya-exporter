const TuyAPI = require("tuyapi");
const devices = require("./devices.json");

const sleep = async ms => new Promise(resolve => setTimeout(resolve, ms));

async function getState({ name, id, key }) {
  const device = new TuyAPI({ id, key });

  try {
    // Connect to the device.
    await device.find({ timeout: 4 });

    device.on("error", e => {
      throw e;
    });
    await device.connect();

    // Read its power state into a number.
    const powered = await device.get();
    const power_state = powered ? 1 : 0;

    // Disconnect from the device.
    await device.disconnect();

    return { name, id, power_state };
  } catch (e) {
    return { name, id, error: e.message };
  }
}

(async function main() {
  const states = await Promise.all(devices.map(getState));
  process.stdout.write(JSON.stringify(states) + "\n");
})();
