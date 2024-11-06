import loadEmbed from '../embed/embed.js';

export default function decorate(block) {
  const props = Array.from(block.children, (row) => row.firstElementChild);
  const [, embedURl] = props;
  loadEmbed(embedURl);
}
