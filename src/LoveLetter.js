import React, { useEffect, useState } from "react";

const LoveLetter = () => {
  const fullMessage = `My Love,

Hey aishu, since ne epa en life the vandhiyo enakula 
nerya changes enake teryudhu ipola neryave sirikren 
happy life a move panren ne vandha time o ila un presence o
ena romba happy a vachiruku feel lucky to have you. 

Ini un life la na iruken aishu each and every second love to the core
ah irupom nambure avlo support a irupen indha mani

happy ah birthday va enjoy panu

I just want to say thank you for being you.
For the love, the support, the laughter, and even the tears.

You are my forever. You are my everything.

I love you more than words can ever express. 💍

Forever Yours,

Your Mani
Your Husband
Your Everything`;

  const [showGiftBox, setShowGiftBox] = useState(true);
  const [displayedMessage, setDisplayedMessage] = useState("");
  const speed = 40;

  useEffect(() => {
    if (!showGiftBox) {
      let i = 0;
      const interval = setInterval(() => {
        setDisplayedMessage(fullMessage.slice(0, i + 1));
        i++;
        if (i === fullMessage.length) {
          clearInterval(interval);
        }
      }, speed);

      return () => clearInterval(interval); // cleanup
    }
  }, [showGiftBox]);

  return (
    <div style={styles.body}>
      {showGiftBox ? (
        <div style={styles.wrapper}>
          <div style={styles.giftContainer} onClick={() => setShowGiftBox(false)}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/716/716784.png"
              alt="Gift Box"
              style={styles.giftBox}
            />
            <p style={styles.clickText}>Click to Open Your Surprise! 🎁</p>
          </div>
        </div>
      ) : (
        <>
          <div style={styles.wrapper}>
            <div style={styles.container}>
              <h1 style={styles.heading}>To My Beautiful Aishwarya ❤️</h1>
              <p style={styles.message}>{displayedMessage}</p>
              <div style={styles.heart}>💖</div>
            </div>
          </div>
        <audio autoPlay loop>
  <source
    src="https://drive.google.com/uc?export=download&id=1aQZxsNIKOI_G9mpJg3_N4yrg4adj_owr"
    type="audio/mpeg"
  />
  Your browser does not support the audio tag.
</audio>

        </>
      )}
    </div>
  );
};

const styles = {
  body: {
    margin: 0,
    padding: 0,
    background: "linear-gradient(135deg, #ffe4e1, #ffb6c1)",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    minHeight: "100vh",
    overflowY: "auto",
  },
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "50px 20px",
    minHeight: "100vh",
  },
  giftContainer: {
    textAlign: "center",
    cursor: "pointer",
  },
  giftBox: {
    width: "150px",
    transition: "transform 0.3s ease",
  },
  clickText: {
    marginTop: "15px",
    fontSize: "1.2rem",
    color: "#e91e63",
    fontWeight: "bold",
  },
  container: {
    textAlign: "center",
    padding: "30px",
    backgroundColor: "rgba(255, 255, 255, 0.85)",
    borderRadius: "25px",
    boxShadow: "0 0 25px rgba(0,0,0,0.2)",
    maxWidth: "600px",
    animation: "fadeIn 2s ease forwards",
  },
  heading: {
    fontSize: "2.2rem",
    color: "#e91e63",
    marginBottom: "10px",
  },
  message: {
    fontSize: "1.2rem",
    color: "#333",
    marginTop: "20px",
    lineHeight: 1.6,
    whiteSpace: "pre-line",
    fontWeight: 500,
  },
  heart: {
    color: "red",
    fontSize: "2rem",
    animation: "heartbeat 1.5s infinite",
    marginTop: "20px",
  },
};

export default LoveLetter;
