import type { IKverConfig, TDocumentType, TKverAdapter } from '@/core/types'

export class Kver<T extends TDocumentType> {
  adapter: TKverAdapter<T>

  constructor(private config: IKverConfig<T>) {
    this.config = config
    this.adapter = config.adapter
  }
}
