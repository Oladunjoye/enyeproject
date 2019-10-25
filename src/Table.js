import React from "react";
import { Table } from "antd";

import { useSelector } from "react-redux";

const UserTable = props => {
  const data = useSelector(state => state.users);

  const columns =
    window.screen.width > 767
      ? [
          {
            title: "First Name",
            dataIndex: "firstname",
            key: "firstname",
            render: text => <a>{text}</a>
          },
          {
            title: "Last Name",
            dataIndex: "lastname",
            key: "lastname"
          },
          {
            title: "Age",
            dataIndex: "age",
            key: "age"
          },

          {
            title: "Hobby",
            dataIndex: "hobby",
            key: "hobby"
          },

          {
            title: "Birthday",
            dataIndex: "birthday",
            key: "birthday"
          }
        ]
      : [
          {
            title: "Name",
            dataIndex: "firstname",
            key: "firstname",
            render: text => <a>{text}</a>
          },
          {
            title: "Lastname",
            dataIndex: "lastname",
            key: "lastname"
          },
          {
            title: "Age",
            dataIndex: "age",
            key: "age"
          }
        ];

  return (
    <article className="table-max-width center bg-white br3 pa3 pa4-ns mv3 ba b--black-10 ">
      <Table columns={columns} dataSource={data} />;
    </article>
  );
};

UserTable.propTypes = {};

export default UserTable;
