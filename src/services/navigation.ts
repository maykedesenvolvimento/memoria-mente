import { History } from "history";

interface NavigationProps {
  history: History;
}

const navigation = {} as NavigationProps;

export function setNavigation(history: History) {
  if (history) navigation.history = history;
}

export function pushNavigation(path: string) {
  navigation.history.push(path);
}

export function popNavigation() {
  navigation.history.goBack();
}