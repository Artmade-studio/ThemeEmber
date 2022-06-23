import { atom } from "nanostores";

const isActive = atom<boolean>(false);

const toggle = () => isActive.set(!isActive.get());

export { isActive, toggle };
