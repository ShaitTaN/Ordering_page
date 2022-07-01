import { createContext, Dispatch, SetStateAction } from "react";

interface IContext{
	closeModal: () => void;
	openModal: () => void;
	isVisible: boolean;
	setIsVisible: Dispatch<SetStateAction<boolean>>;
}

export const Context = createContext({} as IContext);