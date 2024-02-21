import React from "react";
import "./App.scss";
import SelectDropdown from "./components/SelectDropdown";
import DragAndDropFileUpload from "./components/DragAndDropFileUpload";
import Label from "./components/Label";
import CheckLabel from "./components/CheckLabel";
import Divider from "./components/Divider";
import ToggleSwitchGroup from "./components/ToggleSwitchGroup";
import RadioButtonGroup from "./components/RadioButtonGroup";
import SelectWithLabel from "./components/SelectWithLabel";
import PrimaryButton from "./components/PrimaryButton";
import SecondaryButton from "./components/SecondaryButton";
import CloseButton from "./components/CloseButton";

function Home() {
  return (
    <>
      <div className="grid grid-cols-contained justify-center items-center my-3 sm:my-10">
        <div className="block bg-white p-6 sm:p-10 rounded-[25px] drop-shadow-xl">
          {/* Close Button */}
          <CloseButton onClick={() => alert("One way to close the form.")} />

          {/* Form Heading */}
          <div className="flex flex-col justify-center items-center mb-6 sm:mb-10">
            <div className="relative">
              <h1 className="flex text-2xl sm:text-3xl font-bold text-center pb-4 text-blue">
                Document Upload
              </h1>
              <Divider customClasses="max-w-full" />
            </div>
          </div>
          {/* Form wrap */}
          <div className="grid grid-cols-form-wrapper justify-center">
            <div className="grid grid-cols-1 lg:grid-cols-custom-column gap-x-16 mb-6">
              {/* 1st Column */}
              <div className="relative w-full">
                {/* Select Dropdown */}
                <div className="relative block min-h-[40px] mb-5">
                  <SelectDropdown
                    label="Select Import Name:"
                    options={[
                      { label: "", value: "" },
                      { label: "Option 1", value: "Option 1" },
                      { label: "Option 2", value: "Option 2" },
                      { label: "Option 3", value: "Option 3" },
                    ]}
                    groupId="import-name"
                  />
                </div>
                <Divider customClasses="max-w-[320px]" />
                {/* Upload Field */}
                <Label labelText="Select a manifest that you'd like to import" />
                <DragAndDropFileUpload />

                <Divider customClasses="max-w-[320px]" />

                {/* Elapse Data */}
                <CheckLabel
                  labelText="Elapse Data Checking:"
                  greenText="No Elapsed Dates!"
                />

                <Divider customClasses="max-w-[320px]" />

                <Label labelText="Tolerance Window:" />
                <ToggleSwitchGroup />
              </div>
              {/* 2nd Column */}
              <div className="relative w-full">
                {/* Radio Buttons Set 1 */}
                <RadioButtonGroup
                  groupId="schedule"
                  label="Split schedule using social distancing?"
                  choices={["Yes", "No"]}
                  defaultChoice="Yes"
                />

                <Divider customClasses="max-w-[320px]" />

                {/* Location checking */}
                <CheckLabel
                  labelText="Location Checking:"
                  greenText="All Available!"
                />
                <Divider customClasses="max-w-[320px] mb-4" />

                {/* Radio Buttons Set 2 */}
                <RadioButtonGroup
                  groupId="client"
                  label="Client"
                  choices={["Single", "Multiple"]}
                  defaultChoice="Multiple"
                />

                {/* Testing centers */}

                <SelectWithLabel
                  label="Testing Center 1"
                  options={[
                    { label: "Select Client", value: "Select Client" },
                    { label: "Client 1", value: "Client 1" },
                    { label: "Client 2", value: "Client 2" },
                    { label: "Client 3", value: "Client 3" },
                  ]}
                  groupId="testing-center-1"
                />
                <SelectWithLabel
                  label="Testing Center 1"
                  options={[
                    { label: "Select Client", value: "Select Client" },
                    { label: "Client 1", value: "Client 1" },
                    { label: "Client 2", value: "Client 2" },
                    { label: "Client 3", value: "Client 3" },
                  ]}
                  groupId="testing-center-1"
                />
                <SelectWithLabel
                  label="Testing Center 2"
                  options={[
                    { label: "Select Client", value: "Select Client" },
                    { label: "Client 1", value: "Client 1" },
                    { label: "Client 2", value: "Client 2" },
                    { label: "Client 3", value: "Client 3" },
                  ]}
                  groupId="testing-center-2"
                />
                <SelectWithLabel
                  label="Testing Center 3"
                  options={[
                    { label: "Select Client", value: "Select Client" },
                    { label: "Client 1", value: "Client 1" },
                    { label: "Client 2", value: "Client 2" },
                    { label: "Client 3", value: "Client 3" },
                  ]}
                  groupId="testing-center-3"
                />
                <SelectWithLabel
                  label="Testing Center 4"
                  options={[
                    { label: "Select Client", value: "Select Client" },
                    { label: "Client 1", value: "Client 1" },
                    { label: "Client 2", value: "Client 2" },
                    { label: "Client 3", value: "Client 3" },
                  ]}
                  groupId="testing-center-4"
                />
              </div>
            </div>

            <div className="grid">
              <h2 className="text-center font-raleway-bold text-[1.1rem] mb-6">
                Data in the import file is correct. Please press Continue to
                import.
              </h2>
              <div className="flex flex-col sm:flex-row justify-center gap-2 md:gap-6 mb-4">
                <PrimaryButton onClick={() => alert("Import Successful!")}>
                  Continue Import
                </PrimaryButton>
                <SecondaryButton
                  onClick={() => alert("Another way to close the form.")}
                >
                  Cancel
                </SecondaryButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
