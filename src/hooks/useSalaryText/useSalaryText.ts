interface UseSalaryTextProps {
  min: number;
  max: number;
  currency: string;
}

export default function useSalaryText({
  min,
  max,
  currency,
}: UseSalaryTextProps) {
  const formatNumber = (n: number) => {
    const thousandth = Math.floor(n / 1000);
    const hundredth = Math.floor((n % 1000) / 100);

    return !hundredth ? `${thousandth}K` : `${thousandth}.${hundredth}K`;
  };

  return `${formatNumber(min)} – ${formatNumber(max)} ${currency}`;
}
