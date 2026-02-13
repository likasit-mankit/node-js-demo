// ใช้ชื่อ node:* เพื่อลดความสับสน Third-party และ Built-in
import fs from 'node:fs/promises'

// Top-level await
await fs.writeFile('./hello.txt', 'Hello World!')