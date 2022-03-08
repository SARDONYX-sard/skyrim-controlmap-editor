import { useEffect, useState } from "react";
import { useMsg } from "../../hooks/useMsg";
import { formatKeyString } from "../../utils/utils";
import { FullKeyboard } from "./fullkeyboard/FullKeyboard";
import { Keyboard102 } from "./key102/Key102";

const KeyboardWrapper: React.FC = () => {
  const [input, setInput] = useState<string>("");

  const [layout, setLayout] = useState<"102key" | "full key">("full key");
  const handleLayout = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    const layout = event.target.value;
    if (layout === "full key" || layout === "102key") {
      setLayout(layout);
    }
    console.error("It's layout name is not supported");
  };

  const onChangeInput: React.ChangeEventHandler<HTMLInputElement> = (
    _event
  ) => {
    setInput(input);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    setInput(formatKeyString(e.code));
    e.preventDefault();
  };

  const { setMsg } = useMsg();
  useEffect(() => {
    setMsg(
      "Preventing keyboard default behavior now.(e.g F5:reload => not happened)"
    );
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      setMsg("Enabled keyboard default behavior.");
    };
  }, [setMsg]);

  return (
    <div className="keyboard-content">
      <select
        value={layout}
        onChange={handleLayout}
        style={{ padding: "10px" }}
      >
        <option value="102key">102key</option>
        <option value="full key">Full Keyboard</option>
      </select>

      <input
        onChange={(e) => onChangeInput(e)}
        placeholder={"Press your keyboard or click virtual keyboard."}
        readOnly={true}
        value={input}
      />
      {layout === "full key" ? (
        <FullKeyboard />
      ) : (
        <Keyboard102 layoutType="102key" />
      )}
    </div>
  );
};

export { KeyboardWrapper };
