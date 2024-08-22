import { Container, Link, Typography } from "@mui/material";

export function Footer() {
  return (
    <Container component='footer'>
      <Typography
        variant='body2'
        color={"GrayText"}
        textAlign='center'
        marginTop={5}
        marginBottom={4}
      >
        Developed by&nbsp;
        <Link href='https://github.com/Ligueja' target='_blank'>
          Luiz Henrique Fernandes Coelho
        </Link>
        &nbsp;
        {new Date().getFullYear()}.
      </Typography>
    </Container>
  );
}
