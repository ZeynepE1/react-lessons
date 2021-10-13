const KeyboardEvents = () => {
    /**
     * TODO list
     * keyDown
     * keyUp
     * cut
     * copy
     * paste
     */
  
    const handleKeyDown = (e) => {
      console.log("type: ", e.type);
    };
    const handleKeyUp = (e) => {
      console.log("value: ", e.target.value);
      console.log("key code: ", e.keyCode);
    };
  
    // cut
    const handleCut = (e) => console.log("event type: ", e.type);
  
    // paste
    const handlePaste = (e) => console.log("event type: ", e.type);
  
    // copy
    const handleCopy = (e) => console.log("event type: ", e.type);
  
    return (
      <div style={{ marginTop: "30px" }}>
        <h2>KeyboardEvents</h2>
        <input type="text" onKeyDown={handleKeyDown} onKeyUp={handleKeyUp} />
        <p onCut={handleCut} onPaste={handlePaste} onCopy={handleCopy}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only five
          centuries, but also the leap into electronic typesetting, remaining
          essentially unchanged. It was popularised in the 1960s with the release
          of Letraset sheets containing Lorem Ipsum passages, and more recently
          with desktop publishing software like Aldus PageMaker including versions
          of Lorem Ipsum.
        </p>
      </div>
    );
  };
  
  export default KeyboardEvents;