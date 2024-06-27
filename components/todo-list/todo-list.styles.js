export default `
    <style>
        body {
            font-family: Arial, Helvetica, sans-serif;
            text-align: center;
            margin: 0;
        }

        .header-container {
            background-color: #f44336;
            padding: 30px 40px;
            color: white;
            text-align: center;
        }

        .task-input-container {
            display: flex;
            justify-content: center;
            margin-top: 20px;
        }

        .task-list {
            background: #eee;
            list-style-type: none;
            margin: 0;
        }

        .task-list:nth-child(odd) {
            background-color: #f2f2f2;
        }

        .task-element-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

    </style>
`;