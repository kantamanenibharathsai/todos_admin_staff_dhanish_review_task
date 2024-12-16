const customCalendarStyles = {
    container: {
      width: "100%",
      maxWidth: "480px",
      margin: "auto",
      padding: "10px",
      backgroundColor: "#ffffff",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "15px", 
    },
    yearButton: {
      marginRight: "8px",
      color: "#007bff",
      fontSize: "14px", 
    },
    iconButton: {
      color: "#007bff",
      fontSize: "20px", 
    },
    textBlack: {
      color: "#000",
      fontSize: "18px", 
    },
    flexCenter: {
      display: "flex",
      alignItems: "center",
    },
    menuPaper: {
      maxHeight: "180px",
    },
  
    gridCont: { textAlign: "center" },
  
    dayButton: (isPreselected: boolean) => ({
      width: "100%",
      height: "40px",
      borderRadius: "8px",
      backgroundColor: isPreselected ? "green" : "transparent",
      color: isPreselected ? "white" : "black",
      fontSize: "14px",
    }),
  };
  
  export default customCalendarStyles;
  