import { Component } from "react";
import AppNavBar from "./NavBar";
import {
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Area,
  LineChart,
  Line,
} from "recharts";

import { Container, Row, Col } from "react-bootstrap";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
class UsoData extends Component {
  data = [
    { score: 1, globalFrequency: 0.0, frequency: 0.0 },
    { score: 2, globalFrequency: 0.0, frequency: 0.0 },
    { score: 3, globalFrequency: 0.0, frequency: 0.0 },
    { score: 4, globalFrequency: 0.0, frequency: 0.0 },
    { score: 5, globalFrequency: 0.001, frequency: 0.0 },
    { score: 6, globalFrequency: 0.001, frequency: 0.0 },
    { score: 7, globalFrequency: 0.002, frequency: 0.0 },
    { score: 8, globalFrequency: 0.003, frequency: 0.0 },
    { score: 9, globalFrequency: 0.004, frequency: 0.0 },
    { score: 10, globalFrequency: 0.006, frequency: 0.0 },
    { score: 11, globalFrequency: 0.009, frequency: 0.0 },
    { score: 12, globalFrequency: 0.014, frequency: 0.0 },
    { score: 13, globalFrequency: 0.021, frequency: 0.0 },
    { score: 14, globalFrequency: 0.03, frequency: 0.0 },
    { score: 15, globalFrequency: 0.043, frequency: 0.0 },
    { score: 16, globalFrequency: 0.062, frequency: 0.0 },
    { score: 17, globalFrequency: 0.087, frequency: 0.0 },
    { score: 18, globalFrequency: 0.122, frequency: 0.0 },
    { score: 19, globalFrequency: 0.169, frequency: 0.0 },
    { score: 20, globalFrequency: 0.231, frequency: 0.0 },
    { score: 21, globalFrequency: 0.313, frequency: 0.0 },
    { score: 22, globalFrequency: 0.421, frequency: 0.0 },
    { score: 23, globalFrequency: 0.56, frequency: 0.0 },
    { score: 24, globalFrequency: 0.737, frequency: 0.0 },
    { score: 25, globalFrequency: 0.961, frequency: 0.0 },
    { score: 26, globalFrequency: 1.24, frequency: 0.0 },
    { score: 27, globalFrequency: 1.584, frequency: 0.0 },
    { score: 28, globalFrequency: 2.004, frequency: 0.0 },
    { score: 29, globalFrequency: 2.509, frequency: 0.0 },
    { score: 30, globalFrequency: 3.111, frequency: 0.0 },
    { score: 31, globalFrequency: 3.819, frequency: 0.0 },
    { score: 32, globalFrequency: 4.641, frequency: 0.0 },
    { score: 33, globalFrequency: 5.584, frequency: 0.0 },
    { score: 34, globalFrequency: 6.652, frequency: 0.0 },
    { score: 35, globalFrequency: 7.845, frequency: 0.0 },
    { score: 36, globalFrequency: 9.161, frequency: 0.0 },
    { score: 37, globalFrequency: 10.59, frequency: 0.001 },
    { score: 38, globalFrequency: 12.121, frequency: 0.001 },
    { score: 39, globalFrequency: 13.735, frequency: 0.004 },
    { score: 40, globalFrequency: 15.408, frequency: 0.008 },
    { score: 41, globalFrequency: 17.114, frequency: 0.019 },
    { score: 42, globalFrequency: 18.82, frequency: 0.041 },
    { score: 43, globalFrequency: 20.489, frequency: 0.087 },
    { score: 44, globalFrequency: 22.085, frequency: 0.174 },
    { score: 45, globalFrequency: 23.569, frequency: 0.337 },
    { score: 46, globalFrequency: 24.901, frequency: 0.627 },
    { score: 47, globalFrequency: 26.047, frequency: 1.12 },
    { score: 48, globalFrequency: 26.975, frequency: 1.921 },
    { score: 49, globalFrequency: 27.658, frequency: 3.168 },
    { score: 50, globalFrequency: 28.076, frequency: 5.018 },
    { score: 51, globalFrequency: 28.217, frequency: 7.637 },
    { score: 52, globalFrequency: 28.076, frequency: 11.168 },
    { score: 53, globalFrequency: 27.658, frequency: 15.691 },
    { score: 54, globalFrequency: 26.975, frequency: 21.18 },
    { score: 55, globalFrequency: 26.047, frequency: 27.469 },
    { score: 56, globalFrequency: 24.901, frequency: 34.229 },
    { score: 57, globalFrequency: 23.569, frequency: 40.979 },
    { score: 58, globalFrequency: 22.085, frequency: 47.137 },
    { score: 59, globalFrequency: 20.489, frequency: 52.094 },
    { score: 60, globalFrequency: 18.82, frequency: 55.316 },
    { score: 61, globalFrequency: 17.114, frequency: 56.433 },
    { score: 62, globalFrequency: 15.408, frequency: 55.316 },
    { score: 63, globalFrequency: 13.735, frequency: 52.094 },
    { score: 64, globalFrequency: 12.121, frequency: 47.137 },
    { score: 65, globalFrequency: 10.59, frequency: 40.979 },
    { score: 66, globalFrequency: 9.161, frequency: 34.229 },
    { score: 67, globalFrequency: 7.845, frequency: 27.469 },
    { score: 68, globalFrequency: 6.652, frequency: 21.18 },
    { score: 69, globalFrequency: 5.584, frequency: 15.691 },
    { score: 70, globalFrequency: 4.641, frequency: 11.168 },
    { score: 71, globalFrequency: 3.819, frequency: 7.637 },
    { score: 72, globalFrequency: 3.111, frequency: 5.018 },
    { score: 73, globalFrequency: 2.509, frequency: 3.168 },
    { score: 74, globalFrequency: 2.004, frequency: 1.921 },
    { score: 75, globalFrequency: 1.584, frequency: 1.12 },
    { score: 76, globalFrequency: 1.24, frequency: 0.627 },
    { score: 77, globalFrequency: 0.961, frequency: 0.337 },
    { score: 78, globalFrequency: 0.737, frequency: 0.174 },
    { score: 79, globalFrequency: 0.56, frequency: 0.087 },
    { score: 80, globalFrequency: 0.421, frequency: 0.041 },
    { score: 81, globalFrequency: 0.313, frequency: 0.019 },
    { score: 82, globalFrequency: 0.231, frequency: 0.008 },
    { score: 83, globalFrequency: 0.169, frequency: 0.004 },
    { score: 84, globalFrequency: 0.122, frequency: 0.001 },
    { score: 85, globalFrequency: 0.087, frequency: 0.001 },
    { score: 86, globalFrequency: 0.062, frequency: 0.0 },
    { score: 87, globalFrequency: 0.043, frequency: 0.0 },
    { score: 88, globalFrequency: 0.03, frequency: 0.0 },
    { score: 89, globalFrequency: 0.021, frequency: 0.0 },
    { score: 90, globalFrequency: 0.014, frequency: 0.0 },
    { score: 91, globalFrequency: 0.009, frequency: 0.0 },
    { score: 92, globalFrequency: 0.006, frequency: 0.0 },
    { score: 93, globalFrequency: 0.004, frequency: 0.0 },
    { score: 94, globalFrequency: 0.003, frequency: 0.0 },
    { score: 95, globalFrequency: 0.002, frequency: 0.0 },
    { score: 96, globalFrequency: 0.001, frequency: 0.0 },
    { score: 97, globalFrequency: 0.001, frequency: 0.0 },
    { score: 98, globalFrequency: 0.0, frequency: 0.0 },
    { score: 99, globalFrequency: 0.0, frequency: 0.0 },
    { score: 100, globalFrequency: 0.0, frequency: 0.0 },
  ];
  timeData = [
    {
      name: "December 4",
      score: 53,
    },
    {
      name: "January 9 ",
      score: 57,
    },
    {
      name: "March 3",
      score: 62,
    },
    {
      name: "March 29",
      score: 53,
    },
    {
      name: "April 15",
      score: 63,
    },
    {
      name: "May 21",
      score: 73,
    },
    {
      name: "June 30",
      score: 68,
    },
  ];
  render() {
    return (
      <>
        <AppNavBar />
        <Container
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Row>
            <h1 style={{ textAlign: "center" }}>Uso Statistics</h1>
          </Row>
          <Row>
            <Col
              style={{
                margin: "20px",
              }}
            >
              <h3 style={{ textAlign: "center" }}>
                Your Score versus Global Average
              </h3>
              <AreaChart
                width={730}
                height={250}
                data={this.data}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient
                    id="globalFrequency"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="frequency" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="score" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="globalFrequency"
                  stroke="#8884d8"
                  fillOpacity={1}
                  fill="url(#globalFrequency)"
                />
                <Area
                  type="monotone"
                  dataKey="frequency"
                  stroke="#82ca9d"
                  fillOpacity={1}
                  fill="url(#frequency)"
                />
              </AreaChart>
            </Col>

            <Col
              style={{
                margin: "20px",
              }}
            >
              <h3 style={{ textAlign: "center" }}>Your Score over time</h3>
              <LineChart
                width={730}
                height={250}
                data={this.timeData}
                margin={{ top: 5, right: 10, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="score" stroke="#8884d8" />
              </LineChart>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default UsoData;
