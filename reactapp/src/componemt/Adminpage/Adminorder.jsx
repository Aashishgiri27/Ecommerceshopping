import React from "react";
import Layout from "./Layout";
import "../adminpagecss/orderitem.css";

function Adminorder() {
  return (
    <>
      <Layout>
        <table>
          <tr className="tableheader">
            <th>S.no</th>
            <th>Order item</th>
            <th>Username</th>
            <th>Emil-id</th>
            <th>Address</th>
            <th>Mobile no.</th>
          </tr>
          <tr className="tablebody">
            <td>1</td>
            <td>shirts</td>
            <td>aashish</td>
            <td>aashishgi322@gmail.com</td>
            <td>gorakhour</td>
            <td>9120024249</td>
          </tr>
          <tr className="tablebody">
            <td>1</td>
            <td>gens</td>
            <td>aashish</td>

            <td>aashishgi322@gmail.com</td>
            <td>gorakhour</td>
            <td>9120024249</td>
          </tr>
          <tr className="tablebody">
            <td>1</td>
            <td>shirts</td>
            <td>aashish</td>

            <td>aashishgi322@gmail.com</td>
            <td>gorakhour</td>
            <td>9120024249</td>
          </tr>
          <tr className="tablebody">
            <td>1</td>
            <td>shirts</td>
            <td>aashish</td>

            <td>aashishgi322@gmail.com</td>
            <td>gorakhour</td>
            <td>9120024249</td>
          </tr>
        </table>
      </Layout>
    </>
  );
}

export default Adminorder;
