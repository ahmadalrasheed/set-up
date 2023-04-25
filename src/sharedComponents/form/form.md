# data

- const formData = {
  row: {
  row1: [
  {
  tag: "input",
  type: "text",
  name: "firstName",
  label: "First Name",
  eleClassName: "ele1",
  validation: { required: `First Name is required` },
  },
  {
  tag: "input",
  type: "password",
  name: "password",
  label: "Password",
  eleClassName: "ele2",
  id: "passwordField",
  validation: { max: { value: 1000, message: "max value is 1000" } },
  },
  {
  tag: "input",
  type: "number",
  name: "Age1",
  eleClassName: "ele3",
  label: "Age",
  validation: {
  required: `Age is required`,
  valueAsNumber: true,
  min: { value: 18, message: "you must be above 18" },
  },
  },
  ],
  row2: [
  {
  tag: "input",
  type: "text",
  name: "lastName",
  label: "Last Name",
  eleClassName: "ele4",
  validation: {
  required: "Last Name is required",
  minLength: { value: 7, message: "Min length is 7" },
  pattern: {
  value: /[A-Za-z]{3}/,
  message: "please enter at least 3 charcters",
  },
  },
  },
  {
  tag: "input",
  type: "number",
  name: "Age",
  label: "Age",
  eleClassName: "ele5",
  validation: { setValueAs: (v: any) => parseInt(v) },
  },
  ],
  row3: [
  {
  tag: "input",
  type: "file",
  name: "file",
  label: "Upload File",
  id:"upload-file",
  eleClassName: "ele6",
  validation: { required: `File is required` },
  },
  ],
  row4: [
  {
  tag: "input",
  type: "range",
  name: "range",
  label: "Range",
  eleClassName: "ele7",
  validation: { required: `Range is required` },
  },
  {
  tag: "input",
  type: "date",
  name: "date",
  label: "Date",
  eleClassName: "ele8",
  validation: { required: `Date is required` },
  },
  ],
  row5: [
  {
  tag: "input",
  type: "text",
  name: "text-area",
  label: "Random Text",
  placeHolder: "Random Text..",
  eleClassName: "ele9",
  },
  ],
  },
  };

- const [result, getResult] = useState<any>({});

# call component

        <FormController
          getResult={getResult}
          formData={formData}
          title={"login"}
        />
