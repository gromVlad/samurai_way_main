export type Name = {
  name: string;
  id: number;
};

//init state
export const initialStateNames: Name[]= [
  { name: "Vlad", id: 1 },
  { name: "Alex", id: 2 },
  { name: "Andor", id: 3 },
  { name: "Carl", id: 4 },
  { name: "Jack", id: 5 },
];

//reduser
export const reduserName = (state = initialStateNames, action: any): Name[] => {
  return state;
};
