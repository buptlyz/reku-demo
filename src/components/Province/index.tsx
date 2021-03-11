import React, { useMemo } from 'react';
import { Select, Spin } from 'm-ui';
import { useRekuValue } from '@ks/reku';
import { provinceOptionsQuery } from '../../ddd/application';

interface Props {
  value?: string;
  onChange?: (value: string) => void;
}

const Province: React.FC<Props> = ({ value, onChange }) => {
  const provinces = useRekuValue(provinceOptionsQuery);
  const options = useMemo(() => {
      return provinces.state === 'hasValue' ? provinces.contents : [];
  }, [provinces])

  return (
      <Spin spinning={provinces.state === 'loading'}>
          <Select
              loading={provinces.state === 'loading'}
              value={value}
              onChange={onChange}
              options={options}
          />
      </Spin>
  )
}

export default Province;
