using System.Threading;
using System.Threading.Tasks;
using MediatR;

namespace Application.Profiles
{
    public class Details {
        public class Query : IRequest<Profile> {
            public string Username { get; set; }
        }
        public class Handler : IRequestHandler<Query, Profile> {
            private readonly IProfileReader _profileReader;
            public Handler (IProfileReader profileReader) {
                _profileReader = profileReader;
            }

            /* 
                private readonly DataContext _context;
                public Handler (DataContext context) {
                    _context = context;
                } 
            */

            public async Task<Profile> Handle (Query request, CancellationToken cancellationToken) {

                return await _profileReader.ReadProfile(request.Username);
                
                //handler logic goes here
                /* var user = await _context.Users.SingleOrDefaultAsync (
                    x => x.UserName == request.Username //in the Query: IRequest<Profile>
                );

                return new Profile {
                    DisplayName = user.DisplayName,
                        Username = user.UserName,
                        Image = user.Photos.FirstOrDefault (x => x.IsMain)?.Url,
                        Photos = user.Photos,
                        Bio = user.Bio
                }; */
            }
        }
    }
}