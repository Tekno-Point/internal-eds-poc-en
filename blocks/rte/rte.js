import { decorateTable } from "./table.js";
export default async function decorate(block) {
  if (block.classList.contains('table')) {
    decorateTable(block)
    return block
  }
}