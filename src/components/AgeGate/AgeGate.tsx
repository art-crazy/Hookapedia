'use client';

import React, {useEffect, useState} from 'react';

const STORAGE_KEY = 'hp_age_verified_expires_at';
const VERIFICATION_TTL_MS = 1000 * 60 * 60 * 24 * 30; // 30 days

interface AgeGateProps {
	children: React.ReactNode;
}

const isExpired = (expiresAt: string | null) => {
	if (!expiresAt) {
		return true;
	}

	const expiresAtNumber = Number(expiresAt);

	if (Number.isNaN(expiresAtNumber)) {
		return true;
	}

	return expiresAtNumber < Date.now();
};

export function AgeGate({children}: AgeGateProps) {
	const [isVerified, setIsVerified] = useState(false);
	const [isReady, setIsReady] = useState(false);

	useEffect(() => {
		const storedExpiresAt = window?.localStorage?.getItem(STORAGE_KEY) ?? null;

		if (!isExpired(storedExpiresAt)) {
			setIsVerified(true);
		}

		setIsReady(true);
	}, []);

	const handleConfirm = () => {
		const expiresAt = Date.now() + VERIFICATION_TTL_MS;
		window.localStorage.setItem(STORAGE_KEY, String(expiresAt));
		setIsVerified(true);
	};

	const handleReject = () => {
		window.location.href = 'https://www.google.com';
	};

	return (
		<>
			{children}

			{isReady && !isVerified && (
				<div className="age-gate-overlay" role="dialog" aria-modal="true">
					<div className="age-gate">
						<p className="age-gate__title">Сайт содержит материалы о табачной продукции</p>
						<p className="age-gate__text">Подтвердите, что вам уже исполнилось 18 лет.</p>
						<div className="age-gate__actions">
							<button
								type="button"
								className="age-gate__button age-gate__button--primary"
								onClick={handleConfirm}
							>
								Мне есть 18
							</button>
							<button
								type="button"
								className="age-gate__button age-gate__button--ghost"
								onClick={handleReject}
							>
								Мне нет 18
							</button>
						</div>
					</div>
				</div>
			)}
		</>
	);
}

export default AgeGate;
