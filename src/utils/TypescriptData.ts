export interface StaffDropDownInterface {
  userId: number;
  staffName: string;
}

export const staffDropDownData: StaffDropDownInterface[] = [
  { userId: 1, staffName: "Arjun Sharma" },
  { userId: 2, staffName: "Priya Singh" },
  { userId: 3, staffName: "Ravi Kumar" },
  { userId: 4, staffName: "Anjali Mehta" },
  { userId: 5, staffName: "Vikram Reddy" },
  { userId: 6, staffName: "Neha Gupta" },
  { userId: 7, staffName: "Sanjay Patel" },
  { userId: 8, staffName: "Pooja Iyer" },
  { userId: 9, staffName: "Kiran Joshi" },
  { userId: 10, staffName: "Rajesh Nair" },
];

export interface TaskRow {
  id: string;
  staffName: string;
  createdDate: string;
  taskName: string;
  taskDescription: string;
}

export const staticRows: TaskRow[] = [
  {
    id: "1",
    staffName: "John Doe",
    createdDate: "2023-12-01",
    taskName: "Prepare report",
    taskDescription: "Monthly financial report preparation",
  },
  {
    id: "2",
    staffName: "Jane Smith",
    createdDate: "2023-12-02",
    taskName: "Team Meeting",
    taskDescription: "Weekly sync meeting with the design team",
  },
  {
    id: "3",
    staffName: "Alice Brown",
    createdDate: "2023-12-05",
    taskName: "Update client proposal",
    taskDescription: "Revise and send the updated proposal to the client",
  },
  {
    id: "4",
    staffName: "Bob Johnson",
    createdDate: "2023-12-10",
    taskName: "Code Review",
    taskDescription: "Review assigned PRs before deployment",
  },
];
