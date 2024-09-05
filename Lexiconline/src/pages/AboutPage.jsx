import { AboutText } from "../components/Main/AboutText/AboutText";
import { MainHeader } from "../components/Main/MainHeader/MainHeader";
import { Paper } from "../components/Main/Paper/Paper";
import { Wrapper } from "../components/Wrapper/Wrapper";

export const AboutPage = () => {
  return (
    <>
      <Wrapper>
        <MainHeader headerText="About Lexiconline"></MainHeader>
      </Wrapper>
      <Wrapper>
        <Paper>
          <AboutText
            textOne="Welcome to Lexiconline—your go-to online dictionary where the love for words meets the joy of
            learning! Born out of a deep passion for language, Lexiconline is more than just a dictionary; it’s a
            gateway to a world of endless discovery, where every word has a story to tell."
            textTwo="At Lexiconline, we believe that language is a powerful tool that connects us, inspires creativity, and
            broadens our horizons. Whether you’re a student, a writer, or simply a lover of words, our mission is
            to provide you with a resource that not only defines words but also sparks curiosity and encourages
            a deeper understanding of the language we use every day"
          />
          <AboutText
            headerText="Our Philosophy"
            textOne="Words are more than just a means of communication; they are the building blocks of knowledge and
            expression. That’s why Lexiconline is designed to be accessible, user-friendly, and, most importantly,
            completely free. We believe that learning should be a joyful and lifelong journey, and we're here to
            support you every step of the way."
          />
        </Paper>
      </Wrapper>
    </>
  );
};
