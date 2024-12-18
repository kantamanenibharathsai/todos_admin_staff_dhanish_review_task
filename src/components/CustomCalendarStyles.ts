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
      height: "350px"
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "20px", 
    },
    yearButton: {
      marginRight: "8px",
      color: "#000",
      fontSize: "14px", 
    },
    iconButton: {
      color: "#00000",
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
      width: "35px",
      height: "35px",
      borderRadius: "8px",
      backgroundColor: isPreselected ? "green" : "transparent",
      color: isPreselected ? "white" : "black",
      fontSize: "14px",
    }),

    yearStyle: {
      fontSize: "14px",
      color: "#000",
    }
  };
  
  export default customCalendarStyles;
  