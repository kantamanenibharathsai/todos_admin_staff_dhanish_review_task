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
    staffName: "Arjun Sharma",
    createdDate: "2020-03-15",
    taskName: "Prepare report",
    taskDescription: "Monthly financial report preparation",
  },
  {
    id: "2",
    staffName: "Priya Singh",
    createdDate: "2021-06-10",
    taskName: "Team Meeting",
    taskDescription: "Weekly sync meeting with the design team",
  },
  {
    id: "3",
    staffName: "Ravi Kumar",
    createdDate: "2022-09-05",
    taskName: "Update client proposal",
    taskDescription: "Revise and send the updated proposal to the client",
  },
  {
    id: "4",
    staffName: "Anjali Mehta",
    createdDate: "2023-01-20",
    taskName: "Code Review",
    taskDescription: "Review assigned PRs before deployment",
  },
  {
    id: "5",
    staffName: "Vikram Reddy",
    createdDate: "2024-07-18",
    taskName: "Client Presentation",
    taskDescription: "Present project updates to the client",
  },
  {
    id: "6",
    staffName: "Neha Gupta",
    createdDate: "2025-11-12",
    taskName: "Bug Fixing",
    taskDescription: "Resolve high-priority bugs reported by QA",
  },
  {
    id: "7",
    staffName: "Sanjay Patel",
    createdDate: "2026-04-25",
    taskName: "System Testing",
    taskDescription: "Perform testing on the staging environment",
  },
  {
    id: "8",
    staffName: "Pooja Iyer",
    createdDate: "2027-08-09",
    taskName: "Documentation",
    taskDescription: "Update the user manual for the latest release",
  },
  {
    id: "9",
    staffName: "Kiran Joshi",
    createdDate: "2029-02-16",
    taskName: "Data Migration",
    taskDescription: "Migrate data from the legacy system to the new database",
  },
  {
    id: "10",
    staffName: "Rajesh Nair",
    createdDate: "2030-12-08",
    taskName: "Performance Optimization",
    taskDescription: "Optimize application performance for high traffic",
  },
];


