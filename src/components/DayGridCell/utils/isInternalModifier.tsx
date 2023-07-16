import { InternalModifier } from 'types/modifiers';

export function isInternalModifier(
  modifier: string
): modifier is InternalModifier {
  return Object.values(InternalModifier).includes(modifier as InternalModifier);
}
