const homeStyles = {
  homeContainer: {
    width: "100%",
    minHeight: "100vh",
    backgroundColor: "#fff",
  },

  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 5%",
    backgroundColor: "#f5f5f5",
    height: "64px",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    width: "100%",
  },
  logo: {
    fontWeight: 700,
    fontSize: "20px",
    color: "#333",
  },
  buttonContainer: {
    display: "flex",
    gap: "35px",
  },
  button: {
    fontWeight: 600,
    textTransform: "none",
    color: "#333",
    fontSize: "13px",
    border: "1px solid #333",
    alignSelf: "flex-start",
    "&:hover": {
      background: "#333",
      border: 0,
      color: "#fff",
    },
  },
  bodyCont: {
    display: "flex",
    flexDirection: "row",
    gap: "2rem",
    width: "90%",
    // border: "2px solid orange",
    margin: "auto",
    mt: 5,
    overflowY: "auto"
  },

  topCont: {
    width: "20%",
  },

  allFieldsCont: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    width: "20%",
    // border: "2px solid red",
  },

  textFieldStyle: {
    width: "300px",
    "& .MuiInputBase-input": {
      padding: "0px",
      px: "18px",
      height: "48px",
      width: "300px",
      fontSize: "12px",
    },
    input: {
      "&::placeholder": {
        color: "black",
        fontSize: "13px",
      },
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        border: "1px solid #9e896a",
        borderRadius: "15px",
        width: "300px",
      },
      "&.Mui-focused fieldset": {
        border: "1px solid #9e896a",
      },
      "&:hover fieldset": {
        borderColor: "#9e896a",
      },
    },
  },

  textArea: {
    width: "300px",
    height: "150px",
    maxHeight: "150px",
    overflowY: "auto",
    resize: "none",
    padding: "10px 15px",
    borderRadius: "5px",
    fontSize: "12px",
    lineHeight: "20px",
    backgroundColor: "#fff",
    color: "#000",
    "&::placeholder": {
      fontSize: "14px",
      fontFamily: "Roboto",
    },
    "&::-webkit-input-placeholder": {
      fontSize: "14px",
      fontFamily: "Roboto",
    },
    "&::-moz-placeholder": {
      fontSize: "14px",
      fontFamily: "Roboto",
    },
    "&:-ms-input-placeholder": {
      fontSize: "14px",
      fontFamily: "Roboto",
    },
    "&::-ms-input-placeholder": {
      fontSize: "14px",
      fontFamily: "Roboto",
    },
    "&:focus": {
      borderColor: "#9e896a",
      outline: "none",
      boxShadow: "none",
    },
    "&::-webkit-scrollbar": {
      width: "8px",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#9e896a",
      borderRadius: "5px",
    },
    "&::-webkit-scrollbar-thumb:hover": {
      backgroundColor: "#d4a373",
    },
    "&::-webkit-scrollbar-track": {
      backgroundColor: "#f1f1f1",
      borderRadius: "5px",
    },
  },

  endAdornment: {
    color: "#000",
    fontSize: "14px",
    marginRight: "10px",
    cursor: "pointer",
  },

  selectEl: {
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "#9e896a",
    height: "48px",
    width: "300px",
    borderRadius: "15px",
    color: "#000",
    "& .MuiSelect-select": {
      paddingRight: "32px",
      fontSize: "12px",
      color: "black",
    },
    "& fieldset": { border: "none" },
    input: { color: "#000", fontSize: "12px" },
  },

  inputDateCont: {
    position: "relative",
  },

  tableContainer: {
    maxHeight: "800px",
    overflow: "auto",
    border: "1px solid #ddd",
    width: "70%",
    flexGrow: 1,
  },
  tableCellHeader: {
    width: "15%",
    fontWeight: "bold",
    textAlign: "center",
  },
  tableCellDescriptionHeader: {
    width: "35%",
    fontWeight: "bold",
    textAlign: "center",
    wordBreak: "break-word",
    whiteSpace: "normal",
  },
  tableRow: {
    "&:hover": {
      backgroundColor: "#f5f5f5",
    },
  },
  tableCell: {
    textAlign: "center",
    padding: "8px",
  },
  boxTaskName: {
    padding: "8px",
    wordBreak: "break-word",
    whiteSpace: "normal",
    lineHeight: "1.2",
    height: "inherit",
    maxHeight: "60px",
    overflow: "auto",
    textAlign: "center",
  },
  boxTaskDescription: {
    padding: "8px",
    wordBreak: "break-word",
    whiteSpace: "normal",
    lineHeight: "1.2",
    height: "inherit",
    maxHeight: "60px",
    overflow: "auto",
    textAlign: "center",
  },
  actionsCell: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    alignItems: "center",
    padding: "8px",
    height: "100px",
    // border: "2px solid red"
  },
  editButton: {
    minWidth: "35px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    p: "2px",
    color: "#333",
  },
  deleteButton: {
    minWidth: "35px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    p: "2px",
    color: "#d32f2f",
  },

  btnsCont: { display: "flex", gap: "10px" },

  leftCont: {
    // border: "2px solid red",
    display: "flex",
    flexDirection: "column",
    gap: 30,
    width: "30%"
  },

  centeredBox: {
    textAlign: "center",
    overflowY: "auto",
    height: "99.8%",
    scrollbarWidth: "none", 
    msOverflowStyle: "none", 
    "&::-webkit-scrollbar": {
      display: "none", 
    },
  },

  card: {
    width: "280px",
    height: "250px",
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.15)",
    borderRadius: "12px",
    backgroundColor: "#f9f9f9",
    padding: "8px",
    overflowY: "auto",
  },

  cardHeader: {
    paddingBottom: "0px",
    fontSize: "14px",
  },

  cardContent: {
    fontSize: "12px",
    color: "#555",
  },

  rightCont: {
    width: "70%",
    // border: "2px solid red",
    // height: "100%"
  },

  staffBodyCont: {
    maxHeight: "840px",
    // border: "5px solid red",
    display: "flex",
    flexDirection: "row",
    gap: "2rem",
    width: "90%",
    margin: "auto",
    mt: 5,

    
  }
};

export default homeStyles;
