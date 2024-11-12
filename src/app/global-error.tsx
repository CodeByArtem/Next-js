'use client';
import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface GlobalErrorProps {
  // Интерфейс для пропсов глобальной ошибки
}
export default function GlobalError({}: GlobalErrorProps) {
  return (
    <html>
    <body>
    <div>
      <p>Something globally went wrong</p>
    </div>
    </body>
    </html>
  );
}