import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { Section, SectionTheme } from "@components/Section";
import {
  TimelineConnector,
  TimelineContent,
  TimelineDescription,
  TimelineItem,
  TimelineRoot,
  TimelineTitle,
} from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import IntroSection from "@components/Sections/IntroSection";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <main> */}
      <IntroSection />
      <Section theme={SectionTheme.Light}>
        <h1>Hello WORLD 2</h1>
        <TimelineRoot maxW="400px">
          <TimelineItem>
            <TimelineConnector></TimelineConnector>
            <TimelineContent>
              <TimelineTitle>Product Shipped</TimelineTitle>
              <TimelineDescription>13th May 2021</TimelineDescription>
              <Text textStyle="sm">
                We shipped your product via <strong>FedEx</strong> and it should
                arrive within 3-5 business days.
              </Text>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineConnector></TimelineConnector>
            <TimelineContent>
              <TimelineTitle textStyle="sm">Order Confirmed</TimelineTitle>
              <TimelineDescription>18th May 2021</TimelineDescription>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineConnector></TimelineConnector>
            <TimelineContent>
              <TimelineTitle textStyle="sm">Order Delivered</TimelineTitle>
              <TimelineDescription>20th May 2021, 10:30am</TimelineDescription>
            </TimelineContent>
          </TimelineItem>
        </TimelineRoot>
      </Section>
      {/* </main> */}
    </div>
  );
}
