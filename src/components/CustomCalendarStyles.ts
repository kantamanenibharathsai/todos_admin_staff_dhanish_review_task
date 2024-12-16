const customCalendarStyles = {
    container: {
      width: "100%",
      maxWidth: "400px",
      padding: "20px",
      backgroundColor: "#ffffff",
      borderRadius: "12px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.4)",
      px: "50px",
      marginTop: "-130px",
      height: "430px"
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "20px", 
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
  