import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCamera, FaUser, FaTimes } from 'react-icons/fa';
import Button from '../components/Button';
import '../styles/pages/_registration.scss';

const Registration = () => {
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [stream, setStream] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [name, setName] = useState('');
  const [isGuest, setIsGuest] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    // Start camera when component mounts (if not guest mode)
    if (!isGuest) {
      startCamera();
    }

    return () => {
      // Cleanup: stop camera when component unmounts
      stopCamera();
    };
  }, [isGuest]);

  const startCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'user' }
      });
      setStream(mediaStream);
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }
      setError('');
    } catch (err) {
      setError('Kameraga kirish imkoni yo\'q. Iltimos, ruxsat bering.');
      console.error('Error accessing camera:', err);
    }
  };

  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      setStream(null);
    }
  };

  const capturePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');

      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      context.drawImage(video, 0, 0, canvas.width, canvas.height);

      const photoData = canvas.toDataURL('image/png');
      setPhoto(photoData);
      stopCamera();
    }
  };

  const retakePhoto = () => {
    setPhoto(null);
    startCamera();
  };

  const handleContinue = () => {
    if (isGuest) {
      // Guest mode - save guest info
      localStorage.setItem('userData', JSON.stringify({
        isGuest: true,
        name: 'Mehmon',
        photo: null
      }));
      navigate('/home');
    } else {
      // Registration mode - check if photo and name are provided
      if (!photo) {
        setError('Iltimos, surat oling');
        return;
      }
      if (!name.trim()) {
        setError('Iltimos, ismingizni kiriting');
        return;
      }

      // Save registration data
      localStorage.setItem('userData', JSON.stringify({
        isGuest: false,
        name: name.trim(),
        photo: photo
      }));

      navigate('/home');
    }
  };

  const handleGuestMode = () => {
    setIsGuest(true);
    stopCamera();
    setError('');
  };

  const handleRegisterMode = () => {
    setIsGuest(false);
    setPhoto(null);
    setName('');
    startCamera();
  };

  return (
    <div className="registration">
      <div className="registration__container">
        <div className="registration__content">
          <h2 className="registration__title">Ro'yxatdan o'tish</h2>

          {!isGuest ? (
            <>
              <div className="registration__camera-section">
                {!photo ? (
                  <div className="registration__video-wrapper">
                    <video
                      ref={videoRef}
                      autoPlay
                      playsInline
                      className="registration__video"
                    />
                    <div className="registration__camera-overlay">
                      <div className="registration__camera-frame"></div>
                    </div>
                  </div>
                ) : (
                  <div className="registration__photo-wrapper">
                    <img
                      src={photo}
                      alt="Captured"
                      className="registration__photo"
                    />
                    <button
                      className="registration__retake-button"
                      onClick={retakePhoto}
                      aria-label="Retake photo"
                    >
                      <FaTimes />
                    </button>
                  </div>
                )}
              </div>

              {!photo && (
                <div className="registration__camera-controls">
                  <button
                    className="registration__capture-button"
                    onClick={capturePhoto}
                    disabled={!stream}
                  >
                    <FaCamera />
                    <span>Surat olish</span>
                  </button>
                </div>
              )}

              {photo && (
                <div className="registration__name-section">
                  <div className="registration__name-input-wrapper">
                    <FaUser className="registration__name-icon" />
                    <input
                      type="text"
                      className="registration__name-input"
                      placeholder="Ismingizni kiriting"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      maxLength={50}
                    />
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="registration__guest-section">
              <div className="registration__guest-icon">
                <FaUser />
              </div>
              <p className="registration__guest-text">
                Mehmon sifatida davom etish
              </p>
            </div>
          )}

          {error && (
            <div className="registration__error">
              {error}
            </div>
          )}

          <div className="registration__buttons">
            {!isGuest && (
              <Button
                onClick={handleGuestMode}
                className="registration__button registration__button--guest"
              >
                Mehmon sifatida
              </Button>
            )}

            {isGuest && (
              <Button
                onClick={handleRegisterMode}
                className="registration__button registration__button--register"
              >
                Ro'yxatdan o'tish
              </Button>
            )}

            {((isGuest) || (photo && name.trim())) && (
              <Button
                onClick={handleContinue}
                className="registration__button registration__button--continue"
              >
                Davom etish
              </Button>
            )}
          </div>
        </div>
      </div>
      <canvas ref={canvasRef} style={{ display: 'none' }} />
    </div>
  );
};

export default Registration;
