export const Progress = ({ current, total }) => {
  const progressPercentage = (current / total) * 100;

  return (
    <div>
      <div
        style={{
          backgroundColor: "gray",
          height: "20px",
          width: "100%",
          position: "relative",
        }}
      >
        <div
          style={{
            backgroundColor: "blue",
            height: "20px",
            width: `${progressPercentage}%`,
          }}
        ></div>
      </div>
      <p>
        {current}/{total} Questions Answered
      </p>
    </div>
  );
};
