
export default function get_csrf() {
  return document.head.querySelector('meta[name="csrf-token"]').content;
}