import { create } from "zustand";

interface TerminalState {
	commandsRun: number;
	incrementCommands: () => void;
	activeTab: string;
	setActiveTab: (tab: string) => void;
}

export const useTerminalStore = create<TerminalState>((set) => ({
	commandsRun: 0,
	incrementCommands: () =>
		set((state) => ({ commandsRun: state.commandsRun + 1 })),
	activeTab: "about",
	setActiveTab: (tab) => set({ activeTab: tab }),
}));
