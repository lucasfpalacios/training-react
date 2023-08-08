import { Button, Container } from "@mui/material";
import React from "react";
import { useNotification } from "../../context/notification.context";

export const HomePage: React.FC<{}> = () =>{
  const { getError, getSuccess } = useNotification()
  const handleClick = () => {
    getSuccess("Tienes un error en el backend");
  };
  return(
    <Container sx={{ mt: 9 }} maxWidth='xl'>
      <Button onClick={handleClick} fullWidth variant='contained'>
        Estamos en Home
      </Button>
    </Container>
  );
};

