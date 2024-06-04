import Head from "next/head";
import IndexStyled from "@/pages/index.styled";
import GlobalStyles from "@/styles/global";
import Main from "@/pages/components/2.main/main"

export default function Home() {
  return (
    <IndexStyled>
      <GlobalStyles />
      <Head>
        <title>Frontend Mentor | Fylo landing page</title>
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/images/favicon-32x32.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Main />
    </IndexStyled>
  );
}
