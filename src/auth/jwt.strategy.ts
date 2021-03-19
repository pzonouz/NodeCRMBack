import { AuthService } from './auth.service';
import { Constants } from '../Constants';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: Constants.JwtConstants.secretOrKey,
    });
  }

  validate(payload: any) {
    return { id: payload.sub, username: payload.username };
  }
}
