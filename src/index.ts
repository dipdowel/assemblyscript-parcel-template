// @ts-ignore
import { initWasm } from "../assembly/index.as";

// `WasmModule` is autogenerated and provides the shape of your WASM module to the TypeScript part of your application
import { WasmModule } from "./wasm-module";

(async () => {
  try {
    // Initialise the WASM module
    const wasm: WasmModule = await initWasm();

    // report the size of the WASM memory
    console.info(
      `WASM memory size: ${wasm.memory.buffer.byteLength / 1024} KiB`
    );

    // call the WASM function
    const result = wasm.add(4, 6);
    console.log(`[JS] wasm.add(4, 6) --> ${result}`);
  } catch (error) {
    console.error("An error occurred:", error);
  }
})();
