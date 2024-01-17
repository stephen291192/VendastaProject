// TableComponent.js
import React from "react";
import { FaCheck } from "react-icons/fa6";
import { MdOutlineClose } from "react-icons/md";

const Table = () => {
  return (
    <div className="overflow-x-auto mc">
      <table>
        <thead>
          <tr>
            <th className="wdTH">Competitor</th>
            <th className="wdTH">Vendasta</th>
            <th className="wdTH">Thryv</th>
            <th className="wdTH">Birdeye</th>
            <th className="wdTH">Reputation.com</th>
            <th className="wdTH">Podium</th>
            <th className="wdTH">Chatmeter</th>
            <th className="wdTH">HighLevel</th>
            {/* <th>Feature 1 AI Powered Review Requesting</th>
            <th>Feature 2 AI Powered Reporting</th>
            <th>Feature 3 White-Label Platform to Resell Digital Products</th>
            <th>Feature 4 Sentiment & Competitive Analysis</th>
            <th>Feature 5 Editable Review Requesting Templates</th>
            <th>Feature 6 100+ sites for managing online presence</th>
            <th>Feature 7 Business Listing Accuracy</th>
            <th>
              Feature 8 Agency Platform for Resellers with client billing and
            </th>
            <th>Feature 9 Managed Services</th> */}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="wdTD">Feature 1 AI Powered Review Requesting</td>
            <td>
              <FaCheck color="green" size={25} />
            </td>
            <td>
              <FaCheck color="green" size={25} />
            </td>
            <td>
              <FaCheck color="green" size={25} />
            </td>
            <td>
              <FaCheck color="green" size={25} />
            </td>
            <td>
              <FaCheck color="green" size={25} />
            </td>
            <td>
              <FaCheck color="green" size={25} />
            </td>
            <td>
              <FaCheck color="green" size={25} />
            </td>
          </tr>
          <tr>
            <td>Feature 2 AI Powered Reporting</td>

            <td>
              <MdOutlineClose color="red" size={25} />
            </td>
            <td>
              <FaCheck color="green" size={25} />
            </td>

            <td>
              <MdOutlineClose color="red" size={25} />
            </td>
            <td>
              <FaCheck color="green" size={25} />
            </td>
            <td>
              <MdOutlineClose color="red" size={25} />
            </td>
            <td>
              <MdOutlineClose color="red" size={25} />
            </td>
            <td>
              <FaCheck color="green" size={25} />
            </td>
          </tr>
          <tr>
            <td>Feature 3 White-Label Platform to Resell Digital Products</td>
            <td>
              <FaCheck color="green" size={25} />
            </td>
            <td>
              <MdOutlineClose color="red" size={25} />
            </td>
            <td>
              <MdOutlineClose color="red" size={25} />
            </td>

            <td>
              <FaCheck color="green" size={25} />
            </td>
            <td>
              <MdOutlineClose color="red" size={25} />
            </td>
            <td>
              <FaCheck color="green" size={25} />
            </td>
            <td>
              <MdOutlineClose color="red" size={25} />
            </td>
          </tr>
          <tr>
            <td>Feature 4 Sentiment & Competitive Analysis</td>
            <td>
              <FaCheck color="green" size={25} />
            </td>
            <td>
              <MdOutlineClose color="red" size={25} />
            </td>
            <td>
              <FaCheck color="green" size={25} />
            </td>
            <td>
              <FaCheck color="green" size={25} />
            </td>

            <td>
              <FaCheck color="green" size={25} />
            </td>
            <td>
              <MdOutlineClose color="red" size={25} />
            </td>
            <td>
              <FaCheck color="green" size={25} />
            </td>
          </tr>
          <tr>
            <td>Feature 5 Editable Review Requesting Templates</td>
            <td>
              <MdOutlineClose color="red" size={25} />
            </td>
            <td>
              <FaCheck color="green" size={25} />
            </td>
            <td>
              <FaCheck color="green" size={25} />
            </td>
            <td>Yes, with separate app</td>
            <td>
              <MdOutlineClose color="red" size={25} />
            </td>
            <td>
              <FaCheck color="green" size={25} />
            </td>

            <td>
              <FaCheck color="green" size={25} />
            </td>
          </tr>
          <tr>
            <td>Feature 6 100+ sites for managing online presence</td>
            <td>
              <FaCheck color="green" size={25} />
            </td>
            <td>
              <FaCheck color="green" size={25} />
            </td>
            <td>
              <MdOutlineClose color="red" size={25} />
            </td>
            <td>
              <FaCheck color="green" size={25} />
            </td>
            <td>
              <FaCheck color="green" size={25} />
            </td>
            <td>Yes, with separate app</td> <td>Yes, with separate app</td>
          </tr>
          <tr>
            <td>Feature 7 Business Listing Accuracy</td>
            <td>
              <FaCheck color="green" size={25} />
            </td>
            <td>
              <FaCheck color="green" size={25} />
            </td>
            <td>
              <MdOutlineClose color="red" size={25} />
            </td>
            <td>
              <FaCheck color="green" size={25} />
            </td>
            <td>
              <MdOutlineClose color="red" size={25} />
            </td>
            <td>
              <FaCheck color="green" size={25} />
            </td>
            <td>
              <MdOutlineClose color="red" size={25} />
            </td>
          </tr>
          <tr>
            <td>
              Feature 8 Agency Platform for Resellers with client billing and
              workflow
            </td>
            <td>
              <FaCheck color="green" size={25} />
            </td>
            <td>
              <FaCheck color="green" size={25} />
            </td>
            <td>
              <MdOutlineClose color="red" size={25} />
            </td>
            <td>
              <FaCheck color="green" size={25} />
            </td>
            <td>
              <MdOutlineClose color="red" size={25} />
            </td>
            <td>
              <FaCheck color="green" size={25} />
            </td>
            <td>
              <MdOutlineClose color="red" size={25} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
